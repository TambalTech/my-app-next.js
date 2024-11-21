'use client';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function DarkModeSwitcher() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component renders only after the client has mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration error by ensuring client-side code is only run on the client
  if (!mounted) return null; // Do not render anything until mounted

  // Use the correct theme based on user/system preference
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      {currentTheme === 'dark' ? (
        <MdLightMode
          onClick={() => setTheme('light')}
          className="text-xl cursor-pointer hover:text-amber-500"
        />
      ) : (
        <MdDarkMode
          onClick={() => setTheme('dark')}
          className="text-xl cursor-pointer hover:text-amber-500"
        />
      )}
    </div>
  );
}
