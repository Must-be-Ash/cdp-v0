"use client";
import { useState } from "react";
import { prompts } from "@/lib/prompts";
import { Button } from "@/components/ui/button";
import { Copy, Check } from 'lucide-react';

export function PromptBlock() {
  const [copiedPrompt, setCopiedPrompt] = useState<number | null>(null);

  const handleCopy = async (filePath: string, index: number) => {
    try {
      // Extract filename from filePath (e.g., "/prompts/fund-my-craft.md" -> "fund-my-craft.md")
      const filename = filePath.split('/').pop();

      // Fetch the markdown content
      const response = await fetch(`/api/prompts/${filename}`);
      
      // Check if response is ok before trying to parse JSON
      if (!response.ok) {
        console.error('Failed to fetch prompt:', response.status, response.statusText);
        return;
      }

      // Check if response is actually JSON
      const contentType = response.headers.get('content-type');
      if (!contentType?.includes('application/json')) {
        console.error('Response is not JSON:', contentType);
        return;
      }

      const data = await response.json();

      if (data.content) {
        await navigator.clipboard.writeText(data.content);
        setCopiedPrompt(index);
        setTimeout(() => setCopiedPrompt(null), 2000);
      } else {
        console.error('No content in response:', data);
      }
    } catch (error) {
      console.error('Error copying prompt:', error);
    }
  };

  return (
    <div className="mt-8 p-6 bg-black/20 backdrop-blur-2xl border border-white/10 rounded-3xl">
      <h2 className="text-lg font-semibold text-center text-white">Remix this Page</h2>
      <p className="text-sm text-center text-gray-300 mt-1 mb-6">
        Copy a prompt and paste it into v0 to transform this template.
      </p>
      <div className="space-y-3">
        {prompts.map((prompt, index) => (
          <div
            key={index}
            className="flex items-center gap-2 p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl"
          >
            <p className="flex-grow text-sm text-gray-300 font-mono">
              {prompt.label}
            </p>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleCopy(prompt.filePath, index)}
              className="text-gray-400 hover:text-white hover:bg-white/20 rounded-lg"
            >
              {copiedPrompt === index ? (
                <Check className="h-4 w-4 text-green-400" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
