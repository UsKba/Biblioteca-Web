interface Response {
  token: string;
  user: {
    name: string;
    email: string;
    enrollment: string;
    campus: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'jofjqeouu32iu31u2i31oqjsok13jijweuhdhun',
        user: {
          name: 'admin',
          email: 'admin@email.com',
          enrollment: '20181104010001',
          campus: 'CA',
        },
      });
    }, 2000);
  });
}
