"use client"

import * as React from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface ConsultationFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ConsultationForm({ open, onOpenChange }: ConsultationFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [serviceValue, setServiceValue] = React.useState("")

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = {
      firstName: formData.get('first-name'),
      lastName: formData.get('last-name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      message: formData.get('message'),
      service: serviceValue,
    };
    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        console.error('Failed to send consultation request');
      } else {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          onOpenChange(false);
        }, 2000);
      }
    } catch (error) {
      console.error('Error submitting consultation request', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair">Schedule a Consultation</DialogTitle>
          <DialogDescription>
            Fill out the form below and our team will get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-6 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" name="first-name" placeholder="John" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" name="last-name" placeholder="Doe" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" placeholder="john@company.com" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" placeholder="(555) 555-5555" type="tel" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company/Organization</Label>
            <Input id="company" name="company" placeholder="Company name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="service">Type of Service</Label>
            <Select required value={serviceValue} onValueChange={setServiceValue}>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="automotive">Automotive Dealerships</SelectItem>
                <SelectItem value="hospitals">Hospitals</SelectItem>
                <SelectItem value="multifamily">Multifamily Buildings</SelectItem>
                <SelectItem value="commercial">Commercial Buildings</SelectItem>
                <SelectItem value="universities">Universities</SelectItem>
                <SelectItem value="events">Corporate Events</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Additional Details</Label>
            <Textarea id="message" name="message" placeholder="Please share any specific requirements or questions you have." className="min-h-[100px]" />
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="rounded-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
              {isSubmitting ? (
                "Submitting..."
              ) : isSuccess ? (
                <span className="flex items-center gap-2">
                  Submitted <Check className="h-4 w-4" />
                </span>
              ) : (
                "Submit Request"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

