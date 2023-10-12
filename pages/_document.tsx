import { Html, Main, Head, NextScript } from "next/document";
import React from "react";

const Document: React.FC = () => {
  return (
    <>
      <Html>
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          {/* Google Analytics Code */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=G-6JKN93G7ET`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-PH29P82N32', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
          {/* Google Adsense Code In Below */}
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2687924945894784"
            crossOrigin="anonymous"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </>
  );
};

export default Document;
