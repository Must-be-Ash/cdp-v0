import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: { filename: string } }
) {
  try {
    const filename = params.filename;
    
    // Security check: only allow reading .md files from prompts directory
    if (!filename.endsWith('.md')) {
      return NextResponse.json({ error: 'Invalid file type' }, { status: 400 });
    }
    
    const filePath = join(process.cwd(), 'prompts', filename);
    const content = await readFile(filePath, 'utf-8');
    
    return NextResponse.json({ content });
  } catch (error) {
    console.error('Error reading prompt file:', error);
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}
