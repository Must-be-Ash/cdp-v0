import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET(request: NextRequest, { params }: { params: { filename: string } }) {
  // Add CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const filename = params.filename;
    
    // Security check: only allow reading .md files from prompts directory
    if (!filename || !filename.endsWith('.md')) {
      return NextResponse.json(
        { error: 'Invalid file type' }, 
        { status: 400, headers: corsHeaders }
      );
    }

    const filePath = join(process.cwd(), 'prompts', filename);
    const content = await readFile(filePath, 'utf-8');
    
    return NextResponse.json(
      { content }, 
      { headers: corsHeaders }
    );
  } catch (error) {
    console.error('Error reading prompt file:', params.filename, error);
    
    // More specific error handling
    const isFileNotFound = error instanceof Error && 
      (error.message.includes('ENOENT') || error.message.includes('no such file'));
    
    const statusCode = isFileNotFound ? 404 : 500;
    const errorMessage = isFileNotFound ? 'File not found' : 'Internal server error';
    
    return NextResponse.json(
      { error: errorMessage }, 
      { status: statusCode, headers: corsHeaders }
    );
  }
}
