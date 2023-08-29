import { 
  Body,
  Container,
  Head,
  Html,
  Img,
  Font,
  Hr,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface WaitlistEmailProps {
    name: string;
    email: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export default function WaitlistEmail({ name, email }: WaitlistEmailProps) {
  return (
    <Html>
    <Head>
      <Preview>Welcome to Platform 307, { name }</Preview>
      <Font
        fontFamily="FK Grotesk"
        fallbackFontFamily="Verdana"
        webFont={{
          url: `${baseUrl}/fonts/FKGrotesk.otf`,
          format: 'opentype',
        }}
        fontWeight={400}
        fontStyle="normal"
      />
    </Head>
    <Body style={main}>
      <Section style={{ ...logo, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Img
          src={`${baseUrl}/static/p307-logo.png`}
          width="20%"
          height="100%"
          alt="P307 Logomark"
        />   
        </Section>
      <Container style={container}>
        <Section style={{ ... box, display: 'flex', flexDirection: 'row', gap: '100px'}}>
          <Text style={paragraph}>
            Hi { name },
          </Text>
          <Text style={paragraph}>
            Thank you for joining the P307 waitlist. We’re building the
            infrastructure for collaborative commerce, just like Salesforce
            did for CRM, and Plaid did for banking.
          </Text>
          <Text style={paragraph}>
            If the 20th-century retail scene revolved around Macy's and
            Best Buy, the 21st-century model will center on us—creators,
            restaurants, publishers, building communities and earning trust
            along the way.
          </Text>
          <Text style={paragraph}>
            Here's the future we're building:
          </Text>
          <section style={{ display: 'flex', alignItems: 'baseline' }}>
            <Text style={{ ... paragraph, marginRight: '0.75rem' }}>▪︎</Text>
            <Text style={paragraph}>
              An online magazine incorporates an in-article shopping
              experience for its seasonal gift guides, auto-curated from
              a network of suppliers.
            </Text>
          </section>
          <section style={{ display: 'flex', alignItems: 'baseline' }}>
            <Text style={{ ... paragraph, marginRight: '0.75rem' }}>▪︎</Text>
            <Text style={paragraph}>
              A local speakeasy could sell vinyl records handpicked from
              a record shops, linking products to DJ audio mixes, and sharing
              the proceeds.
            </Text>
          </section>
          <section style={{ display: 'flex', alignItems: 'baseline' }}>
            <Text style={{ ... paragraph, marginRight: '0.75rem' }}>▪︎</Text>
            <Text style={paragraph}>
              A pet owner buys organic dog food, with our AI indicating at
              checkout that the veterinarian recommending it has been
              a consultant for the brand
            </Text>
          </section>
          <Text style={paragraph}>
          At Platform 307, we're turning partners into curated retailers
          and suppliers into trusted brands, all in a transparent ecosystem.
          building a new world; we're enhancing the one you already live in.
          </Text>
          <Text style={paragraph}>
          Allowing seamless multi-merchant transactions across the internet,
          so that you can transact exactly where you discover. We're not 
          </Text>
          <Text style={paragraph}>
          We're excited to have you on board and will keep you updated on 
          our progress. 
          </Text>
          <Text style={paragraph}>
          With appreciation,
          </Text>
        </Section>
        <Section style={box}>
          <Img
            src={`${baseUrl}/static/p307-logo.png`}
            width="20%"
            height="100%"
            alt="P307 Logomark"
          />
          <Text style={paragraph}>
            ⎯{' '}
            <Link href="https://www.parth.ski" style={anchor}>
              Parth Patel
            </Link>
          </Text>   
        </Section>
        <Section style={box}>
          <Hr style={hr}/>
          <Text style={footer}>
            We are{' '}
              <Link href="https://www.eastpark.xyz" style={anchor}>
                East Park
              </Link>
            . We build, create, and invest in things that forge a greener, more accessible, and joyfully brighter future.
          </Text> 
          <Text style={footer}>
            This email was sent to { email }. If you’d rather not receive this kind of email, you can unsubscribe at any time.
          </Text>
          <Hr style={hr}/>
        </Section>
        <Section style={box}>
          <Text style={footer}>
            © 2023 East Park Holdings Group.,<br/>
            25 Clinton St. New York City,<br/>
            New York 10002
          </Text>
          <Link href="tel:+16467594054" style={{ ...anchor, ...footer }}>
            +1 (646) 759 4054
          </Link>
          <Link href="mail:info@eastpark.xyz" style={{ ...anchor, ...footer }}>
            info@eastpark.xyz
          </Link>
          <Link href="mail:info@eastpark.xyz" style={{ ...anchor, ...footer }}>
            Unsubscribe
          </Link>
        </Section>
      </Container>
    </Body>
  </Html>
);
}

const logo = {
  padding: '2rem 1.5rem',
};

const main = {
  backgroundColor: '#181818',
};

const container = {
  backgroundColor: '#101010',
  borderRadius: '1em',
  margin: '0 auto',
  padding: '2rem 0 4rem',
};

const box = {
  padding: '0 4rem',
};

const hr = {
  borderColor: '#1C1C1C',
  margin: '20px 0',
};

const paragraph = {
  color: '#E4E4E4',
  fontSize: '1em',
  lineHeight: '1.5em',
  textAlign: 'left' as const,
  marginTop: '1em',
  marginBottom: '1em',
};

const anchor = {
  color: '#E4E4E4',
  textDecoration: 'underline',
  textDecorationThickness: 'from-font',
  textUnderlineOffset: '0.25em',
};

const footer = {
  color: '#3F3F3F',
  fontSize: '0.75em',
  lineHeight: '1.5em',
};