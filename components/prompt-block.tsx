"use client";
import { useState } from "react";
import { promptTemplates } from "@/lib/prompt-schemas";
import { generateCustomPrompt } from "@/lib/prompt-generator";
import { DynamicForm } from "@/components/dynamic-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Check, ArrowLeft, Sparkles } from 'lucide-react';

type Step = 'selection' | 'form' | 'result';

export function PromptBlock() {
  const [currentStep, setCurrentStep] = useState<Step>('selection');
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
    setCurrentStep('form');
  };

  const handleFormSubmit = (formData: Record<string, any>) => {
    if (!selectedTemplate) return;
    
    const prompt = generateCustomPrompt({ 
      templateId: selectedTemplate, 
      formData 
    });
    setGeneratedPrompt(prompt);
    setCurrentStep('result');
  };

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Error copying prompt:', error);
    }
  };

  const handleBack = () => {
    if (currentStep === 'form') {
      setCurrentStep('selection');
      setSelectedTemplate(null);
    } else if (currentStep === 'result') {
      setCurrentStep('form');
    }
  };

  const selectedTemplateData = selectedTemplate 
    ? promptTemplates.find(t => t.id === selectedTemplate)
    : null;

  return (
    <div className="mt-8 p-6 bg-black/20 backdrop-blur-2xl border border-white/10 rounded-3xl">
      {currentStep === 'selection' && (
        <>
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold text-white mb-2 flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5" />
              Customize Your Page
            </h2>
            <p className="text-sm text-gray-300">
              Select a template type and fill out the form to generate a custom prompt for your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {promptTemplates.map((template) => (
              <Card
                key={template.id}
                className="bg-white/10 border-white/20 hover:bg-white/15 cursor-pointer transition-all duration-200 hover:scale-105 h-36 flex flex-col"
                onClick={() => handleTemplateSelect(template.id)}
              >
                <CardHeader className="pb-2 pt-4 px-4 flex-shrink-0">
                  <CardTitle className="text-white text-sm font-medium">
                    {template.label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between px-4 pb-4">
                  <p className="text-gray-400 text-xs leading-relaxed">{template.description}</p>
                  <div className="mt-2 flex-shrink-0">
                    <span className="inline-block px-2 py-1 text-xs rounded-full bg-white/20 text-gray-300 font-medium">
                      {template.category}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}

      {currentStep === 'form' && selectedTemplateData && (
        <>
          <div className="flex items-center gap-3 mb-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBack}
              className="text-gray-400 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                <span className="text-lg">{selectedTemplateData.icon}</span>
                {selectedTemplateData.label}
              </h2>
              <p className="text-sm text-gray-300">{selectedTemplateData.description}</p>
            </div>
          </div>
          <DynamicForm
            fields={selectedTemplateData.formFields}
            onSubmit={handleFormSubmit}
            templateId={selectedTemplate || ''}
          />
        </>
      )}

      {currentStep === 'result' && (
        <>
          <div className="flex items-center gap-3 mb-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBack}
              className="text-gray-400 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h2 className="text-xl font-semibold text-white">Your Custom Prompt</h2>
              <p className="text-sm text-gray-300">
                Copy this prompt and paste it into v0 to transform your template.
              </p>
            </div>
          </div>
          <div className="bg-black/30 border border-white/20 rounded-xl p-4 mb-4 max-h-96 overflow-y-auto">
            <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono">
              {generatedPrompt}
            </pre>
          </div>
          <Button
            onClick={handleCopyPrompt}
            className="w-full h-11 px-6 font-medium rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 text-white hover:bg-white/25 hover:border-white/35 transition-all duration-200 shadow-lg"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-2 text-green-400" />
                Copied to Clipboard!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copy Prompt
              </>
            )}
          </Button>
        </>
      )}
    </div>
  );
}
