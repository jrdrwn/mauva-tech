'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ChangeLanguage() {
  const onValueChange = (value: string) => {
    document.cookie = `lang=${value}; path=/`;
    window.location.reload();
  }
  return (
    <Select defaultValue={'en'} onValueChange={onValueChange}>
      <SelectTrigger className="w-max">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en" defaultChecked>
          English
        </SelectItem>
        <SelectItem value="id">Indonesia</SelectItem>
      </SelectContent>
    </Select>
  );
}