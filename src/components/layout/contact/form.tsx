'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/inputv2';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { usePost } from '@/hooks/use-fetch';
import { Loader2 } from 'lucide-react';
import { FormEvent } from 'react';
import { toast } from 'sonner';

export function Form() {
  const { data, loading, error, postData } = usePost<{
    status: string;
    message: string;
  }>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    // Convert FormData to a plain object
    const body = Object.fromEntries(formData.entries());

    await postData('/api/messages', body);

    if (error) {
      toast.error(error);
    }
    if (data?.status === 'error') {
      toast.error(data.message);
    }
    if (data?.status === 'success') {
      toast.success(data.message);
      (e.target as HTMLFormElement).reset();
    } else {
      toast.error('Something went wrong. Please try again later.');
    }
  };
  return (
    <Card className="w-full lg:max-w-xl lg:justify-self-end">
      <CardContent className="p-6 md:p-10">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 ">
          <div className="flex gap-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="firstname">First Name</Label>
              <Input
                type="text"
                id="firstname"
                placeholder="First Name"
                name="first_name"
                required
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="lastname">Last Name</Label>
              <Input
                type="text"
                id="lastname"
                placeholder="Last Name"
                name="last_name"
              />
            </div>
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              required
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              placeholder="Subject"
              name="subject"
              required
            />
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Message</Label>
            <Textarea
              placeholder="Type your message here."
              id="message"
              name="message"
              required
            />
          </div>
          <Button className="w-full" disabled={loading}>
            {loading && <Loader2 className="animate-spin" />}
            {loading ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
