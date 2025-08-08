"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Minus, Trash2 } from "lucide-react";
import { FormField, SocialLink, WishlistItem, RewardTier } from "@/lib/prompt-schemas";

interface DynamicFormProps {
  fields: FormField[];
  onSubmit: (data: Record<string, any>) => void;
  templateId: string;
}

export function DynamicForm({ fields, onSubmit, templateId }: DynamicFormProps) {
  const [formData, setFormData] = useState<Record<string, any>>({});

  // Initialize form data with default values
  useEffect(() => {
    const initialData: Record<string, any> = {};
    fields.forEach(field => {
      if (field.type === 'array') {
        initialData[field.id] = [];
      } else if (field.type === 'object-array') {
        initialData[field.id] = [getDefaultObjectForArrayType(field.arrayType)].filter(Boolean);
      } else if (field.type === 'number') {
        initialData[field.id] = 0;
      } else {
        initialData[field.id] = '';
      }
    });
    setFormData(initialData);
  }, [fields]);

  const getDefaultObjectForArrayType = (arrayType?: string) => {
    switch (arrayType) {
      case 'social-link':
        return { platform: '', url: '', title: '', description: '' };
      case 'wishlist-item':
        return { name: '', price: 0, description: '', imageUrl: '' };
      case 'reward-tier':
        return { name: '', price: 0, description: '', imageUrl: '', limited: false, quantity: 0 };
      default:
        return null;
    }
  };

  const updateFormData = (fieldId: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [fieldId]: value
    }));
  };

  const addArrayItem = (fieldId: string, arrayType?: string) => {
    const current = formData[fieldId] || [];
    const newItem = arrayType ? getDefaultObjectForArrayType(arrayType) : '';
    if (newItem !== null) {
      updateFormData(fieldId, [...current, newItem]);
    }
  };

  const removeArrayItem = (fieldId: string, index: number) => {
    const current = formData[fieldId] || [];
    const updated = current.filter((_: any, i: number) => i !== index);
    updateFormData(fieldId, updated);
  };

  const updateArrayItem = (fieldId: string, index: number, value: any) => {
    const current = formData[fieldId] || [];
    const updated = [...current];
    updated[index] = value;
    updateFormData(fieldId, updated);
  };

  const updateObjectInArray = (fieldId: string, index: number, key: string, value: any) => {
    const current = formData[fieldId] || [];
    const updated = [...current];
    updated[index] = { ...updated[index], [key]: value };
    updateFormData(fieldId, updated);
  };

  const renderSocialLinkForm = (fieldId: string, index: number, link: SocialLink) => (
    <Card key={index} className="p-4 bg-black/10 border border-white/20">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-medium text-white">Social Link {index + 1}</h4>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => removeArrayItem(fieldId, index)}
          className="text-red-400 hover:text-red-300"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label className="text-gray-300">Platform</Label>
          <Input
            placeholder="YouTube"
            value={link.platform || ''}
            onChange={(e) => updateObjectInArray(fieldId, index, 'platform', e.target.value)}
            className="bg-black/20 border-white/20 text-white"
          />
        </div>
        <div>
          <Label className="text-gray-300">URL</Label>
          <Input
            placeholder="https://"
            value={link.url || ''}
            onChange={(e) => updateObjectInArray(fieldId, index, 'url', e.target.value)}
            className="bg-black/20 border-white/20 text-white"
          />
        </div>
        <div>
          <Label className="text-gray-300">Title</Label>
          <Input
            placeholder="My YouTube Channel"
            value={link.title || ''}
            onChange={(e) => updateObjectInArray(fieldId, index, 'title', e.target.value)}
            className="bg-black/20 border-white/20 text-white"
          />
        </div>
        <div>
          <Label className="text-gray-300">Description</Label>
          <Input
            placeholder="Daily tech tutorials"
            value={link.description || ''}
            onChange={(e) => updateObjectInArray(fieldId, index, 'description', e.target.value)}
            className="bg-black/20 border-white/20 text-white"
          />
        </div>
      </div>
    </Card>
  );

  const renderWishlistItemForm = (fieldId: string, index: number, item: WishlistItem) => (
    <Card key={index} className="p-4 bg-black/10 border border-white/20">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-medium text-white">Item {index + 1}</h4>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => removeArrayItem(fieldId, index)}
          className="text-red-400 hover:text-red-300"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label className="text-gray-300">Name</Label>
          <Input
            placeholder="Professional Microphone"
            value={item.name || ''}
            onChange={(e) => updateObjectInArray(fieldId, index, 'name', e.target.value)}
            className="bg-black/20 border-white/20 text-white"
          />
        </div>
        <div>
          <Label className="text-gray-300">Price ($)</Label>
          <Input
            type="number"
            placeholder="299"
            value={item.price || 0}
            onChange={(e) => updateObjectInArray(fieldId, index, 'price', parseFloat(e.target.value) || 0)}
            className="bg-black/20 border-white/20 text-white"
          />
        </div>
        <div className="col-span-2">
          <Label className="text-gray-300">Description</Label>
          <Textarea
            placeholder="This will help me create better content..."
            value={item.description || ''}
            onChange={(e) => updateObjectInArray(fieldId, index, 'description', e.target.value)}
            className="bg-black/20 border-white/20 text-white"
            rows={2}
          />
        </div>
        <div className="col-span-2">
          <Label className="text-gray-300">Image URL (optional)</Label>
          <Input
            placeholder="https://example.com/image.jpg"
            value={item.imageUrl || ''}
            onChange={(e) => updateObjectInArray(fieldId, index, 'imageUrl', e.target.value)}
            className="bg-black/20 border-white/20 text-white"
          />
        </div>
      </div>
    </Card>
  );

  const renderRewardTierForm = (fieldId: string, index: number, tier: RewardTier) => (
    <Card key={index} className="p-4 bg-black/10 border border-white/20">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-medium text-white">Reward Tier {index + 1}</h4>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => removeArrayItem(fieldId, index)}
          className="text-red-400 hover:text-red-300"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label className="text-gray-300">Tier Name</Label>
          <Input
            placeholder="Early Bird Special"
            value={tier.name || ''}
            onChange={(e) => updateObjectInArray(fieldId, index, 'name', e.target.value)}
            className="bg-black/20 border-white/20 text-white"
          />
        </div>
        <div>
          <Label className="text-gray-300">Price ($)</Label>
          <Input
            type="number"
            placeholder="45"
            value={tier.price || 0}
            onChange={(e) => updateObjectInArray(fieldId, index, 'price', parseFloat(e.target.value) || 0)}
            className="bg-black/20 border-white/20 text-white"
          />
        </div>
        <div className="col-span-2">
          <Label className="text-gray-300">Description</Label>
          <Textarea
            placeholder="What backers get for this tier..."
            value={tier.description || ''}
            onChange={(e) => updateObjectInArray(fieldId, index, 'description', e.target.value)}
            className="bg-black/20 border-white/20 text-white"
            rows={2}
          />
        </div>
        <div>
          <Label className="text-gray-300">Image URL (optional)</Label>
          <Input
            placeholder="https://example.com/reward.jpg"
            value={tier.imageUrl || ''}
            onChange={(e) => updateObjectInArray(fieldId, index, 'imageUrl', e.target.value)}
            className="bg-black/20 border-white/20 text-white"
          />
        </div>
        <div>
          <Label className="text-gray-300">Limited Quantity</Label>
          <Input
            type="number"
            placeholder="100"
            value={tier.quantity || 0}
            onChange={(e) => updateObjectInArray(fieldId, index, 'quantity', parseInt(e.target.value) || 0)}
            className="bg-black/20 border-white/20 text-white"
          />
        </div>
      </div>
    </Card>
  );

  const renderArrayField = (field: FormField) => {
    const value = formData[field.id] || [];
    
    if (field.arrayType === 'social-link') {
      return (
        <div className="space-y-3">
          {value.map((link: SocialLink, index: number) => 
            renderSocialLinkForm(field.id, index, link)
          )}
          <Button
            type="button"
            onClick={() => addArrayItem(field.id, field.arrayType)}
            className="w-full h-11 px-6 font-medium rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 text-white hover:bg-white/25 hover:border-white/35 transition-all duration-200 shadow-lg"
          >
            <Plus className="w-4 h-4 mr-2" /> Add Social Link
          </Button>
        </div>
      );
    }

    if (field.arrayType === 'wishlist-item') {
      return (
        <div className="space-y-3">
          {value.map((item: WishlistItem, index: number) => 
            renderWishlistItemForm(field.id, index, item)
          )}
          <Button
            type="button"
            onClick={() => addArrayItem(field.id, field.arrayType)}
            className="w-full h-11 px-6 font-medium rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 text-white hover:bg-white/25 hover:border-white/35 transition-all duration-200 shadow-lg"
          >
            <Plus className="w-4 h-4 mr-2" /> Add Item
          </Button>
        </div>
      );
    }

    if (field.arrayType === 'reward-tier') {
      return (
        <div className="space-y-3">
          {value.map((tier: RewardTier, index: number) => 
            renderRewardTierForm(field.id, index, tier)
          )}
          <Button
            type="button"
            onClick={() => addArrayItem(field.id, field.arrayType)}
            className="w-full h-11 px-6 font-medium rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 text-white hover:bg-white/25 hover:border-white/35 transition-all duration-200 shadow-lg"
          >
            <Plus className="w-4 h-4 mr-2" /> Add Reward Tier
          </Button>
        </div>
      );
    }

    if (field.arrayType === 'image-url') {
      return (
        <div className="space-y-2">
          {value.map((url: string, index: number) => (
            <div key={index} className="flex gap-2">
              <Input
                placeholder="https://example.com/image.jpg"
                value={url}
                onChange={(e) => updateArrayItem(field.id, index, e.target.value)}
                className="bg-black/20 border-white/20 text-white flex-1"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeArrayItem(field.id, index)}
                className="text-red-400 hover:text-red-300"
              >
                <Minus className="w-4 h-4" />
              </Button>
            </div>
          ))}
          <Button
            type="button"
            onClick={() => addArrayItem(field.id)}
            className="w-full h-11 px-6 font-medium rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 text-white hover:bg-white/25 hover:border-white/35 transition-all duration-200 shadow-lg"
          >
            <Plus className="w-4 h-4 mr-2" /> Add Image URL
          </Button>
        </div>
      );
    }

    // Default array handling for simple arrays
    return (
      <div className="space-y-2">
        {value.map((item: string, index: number) => (
          <div key={index} className="flex gap-2">
            <Input
              placeholder={field.placeholder}
              value={item}
              onChange={(e) => updateArrayItem(field.id, index, e.target.value)}
              className="bg-black/20 border-white/20 text-white flex-1"
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => removeArrayItem(field.id, index)}
              className="text-red-400 hover:text-red-300"
            >
              <Minus className="w-4 h-4" />
            </Button>
          </div>
        ))}
        <Button
          type="button"
          onClick={() => addArrayItem(field.id)}
          className="w-full h-11 px-6 font-medium rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 text-white hover:bg-white/25 hover:border-white/35 transition-all duration-200 shadow-lg"
        >
          <Plus className="w-4 h-4 mr-2" /> Add Item
        </Button>
      </div>
    );
  };

  const renderField = (field: FormField) => {
    const value = formData[field.id];

    switch (field.type) {
      case 'text':
      case 'url':
      case 'email':
        return (
          <Input
            placeholder={field.placeholder}
            value={value || ''}
            onChange={(e) => updateFormData(field.id, e.target.value)}
            className="bg-black/20 border-white/20 text-white"
            required={field.required}
          />
        );

      case 'textarea':
        return (
          <Textarea
            placeholder={field.placeholder}
            value={value || ''}
            onChange={(e) => updateFormData(field.id, e.target.value)}
            className="bg-black/20 border-white/20 text-white min-h-[100px]"
            required={field.required}
            rows={4}
          />
        );

      case 'number':
        return (
          <Input
            type="number"
            placeholder={field.placeholder}
            value={value || 0}
            onChange={(e) => updateFormData(field.id, parseFloat(e.target.value) || 0)}
            className="bg-black/20 border-white/20 text-white"
            required={field.required}
            min={field.validation?.min}
            max={field.validation?.max}
          />
        );

      case 'select':
        return (
          <Select value={value || ''} onValueChange={(newValue) => updateFormData(field.id, newValue)}>
            <SelectTrigger className="bg-black/20 border-white/20 text-white">
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case 'array':
      case 'object-array':
        return renderArrayField(field);

      default:
        return null;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...formData, templateId });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {fields.map((field) => (
        <div key={field.id} className="space-y-2">
          <Label className="text-white font-medium">
            {field.label}
            {field.required && <span className="text-red-400 ml-1">*</span>}
          </Label>
          {renderField(field)}
        </div>
      ))}
      
      <Button type="submit" className="w-full h-11 px-6 font-medium rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 text-white hover:bg-white/25 hover:border-white/35 transition-all duration-200 shadow-lg">
        Generate Custom Prompt
      </Button>
    </form>
  );
}