'use client';

import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

import { useSupabase } from '@/app/supabase-provider';
import { getURL } from '@/utils/helpers';

export default function AuthUI() {
  const { supabase } = useSupabase();

  console.log('url: ', getURL());
  return (
    <div className="flex flex-col space-y-4">
      <Auth
        supabaseClient={supabase}
        providers={['github']}
        // redirectTo={`${getURL()}/auth/callback`}
        redirectTo={`http://localhost:3000/auth/callback`}
        magicLink={true}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: '#404040',
                brandAccent: '#52525b'
              }
            }
          }
        }}
        theme="dark"
      />
    </div>
  );
}
