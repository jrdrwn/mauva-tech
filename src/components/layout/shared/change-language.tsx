'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useEffect, useState } from 'react';

export default function ChangeLanguage() {
  const [lang, setLang] = useState<string>('en');

  useEffect(() => {
    const langCookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith('lang='));
    if (langCookie) {
      const langValue = langCookie.split('=')[1];
      setLang(langValue);
    } else {
      setLang('en');
    }
  }, []);

  const onValueChange = (value: string) => {
    document.cookie = `lang=${value}; path=/`;
    window.location.reload();
  };
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className="w-max">
        <SelectValue placeholder={lang.toUpperCase()} />
      </SelectTrigger>
      <SelectContent defaultValue={lang}>
        <SelectItem value="en">EN</SelectItem>
        <SelectItem value="id">ID</SelectItem>
      </SelectContent>
    </Select>
  );
}
