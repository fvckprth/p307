import { 
  Body,
  Container,
  Column,
  Head,
  Html,
  Img,
  Font,
  Hr,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
  Row,
} from '@react-email/components';
import * as React from 'react';

interface WaitlistEmailProps {
    name: string;
    email: string;
    details: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export default function WaitlistEmail({ name, email }: WaitlistEmailProps) {
  return (
  <Tailwind
            config={{
              theme: {
                extend: {
                  colors: {
                    brand: '#007291',
                  },
                },
              },
            }}
          >
    <Html>
        <Head>
            <Preview>Welcome to P307, { name }</Preview>
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
        <Body className='bg-[#121212]'>
          <Section className="flex items-start p-8">
            <Img
              src={`${baseUrl}/static/p307-logo.png`}
              width={Math.round(137 * 0.8)} 
              height={Math.round(40 * 0.8)}
              alt="P307 Logomark"
            />   
          </Section>
          <Container className="bg-[#121212] border border-solid border-[#3F3F3F] rounded-2xl mb-8 p-6 md:p-8">
            <Section className="flex flex-row gap-24">
              <Section>
                <Text className="text-[#E4E4E4] text-sm md:text-base leading-5 md:leading-6 text-left">
                  Hi { name },
                </Text>
                <Text className="text-[#E4E4E4] text-sm md:text-base leading-5 md:leading-6 text-left">
                  Thank you for joining our waitlist. I'm so happy to have you here.                
                </Text>
                <Text className="text-[#E4E4E4] text-sm md:text-base leading-5 md:leading-6 text-left">
                  We've been working on something special with Platform 307. 
                  We're designing a space on the internet where you can discover 
                  and buy things in a way that feels natural, transparent, 
                  and meaningful.
                </Text>
                <Text className="text-[#E4E4E4] text-sm md:text-base leading-5 md:leading-6 text-left">
                  If the 20th-century retail scene revolved around Macy's and
                  Best Buy, the 21st-century model will center on us — creators,
                  restaurants, publishers, building communities and earning trust
                  along the way.
                </Text>
                <Text className="text-[#E4E4E4] text-sm md:text-base leading-5 md:leading-6 text-left">
                  Here's the future we're building:
                </Text>
              </Section>
              <Section>
                <Row className="text-[#E4E4E4] text-sm md:text-base leading-5 md:leading-6 text-left mb-4">
                  <Column className='pr-2 md:pr-4 align-top'>▪</Column>
                  <Column>
                    An online magazine offers a seamless in-article shopping 
                    feature for clothing seen in a TV series, with selections 
                    curated by the show's own costume designer.
                  </Column>
                </Row>
                <Row className="text-[#E4E4E4] text-sm md:text-base leading-5 md:leading-6 text-left mb-4">
                  <Column className='pr-2 md:pr-4 align-top'>▪</Column>
                  <Column>
                    A neighborhood speakeasy sells a curated collection of 
                    vinyl records, each hand-selected from local record stores 
                    and paired with DJ audio mixes, while seamlessly sharing 
                    the profits.
                  </Column>
                </Row>
                <Row className="text-[#E4E4E4] text-sm md:text-base leading-5 md:leading-6 text-left mb-2">
                <Column className='pr-2 md:pr-4 align-top'>▪</Column>
                  <Column>
                    A pet owner buys organic dog food, with our AI indicating 
                    at checkout that the veterinarian recommending it has been 
                    a consultant for the brand.
                  </Column>
                </Row>
              </Section>
              <Section>
                <Text className="text-[#E4E4E4] text-sm md:text-base leading-5 md:leading-6 text-left">
                  We're turning partners into curated retailers and 
                  suppliers into trusted brands, while allowing seamless 
                  multi-merchant transactions across the internet.
                </Text>
                <Text className="text-[#E4E4E4] text-sm md:text-base leading-5 md:leading-6 text-left">
                  Instead of reinventing the wheel, we're trying to 
                  make it more attuned to how you already live your life.
                </Text>
                <Text className="text-[#E4E4E4] text-sm md:text-base leading-5 md:leading-6 text-left">
                  We'll keep you in the loop as we make strides toward our 
                  vision. In the meantime, feel free to reach out with
                  any questions or feedback.
                </Text>
                <Text className="text-[#E4E4E4] text-sm md:text-base leading-5 md:leading-6 text-left">
                  With appreciation,
                </Text>
              </Section>
              <Section className="pt-8 pb-4">
                <Img
                  src={`${baseUrl}/static/parth-signature.png`}
                  width={Math.round(81 * 1.3)}
                  height={Math.round(48 * 1.3)}
                  alt="Parth Patel's Signature"
                />
                <Text className="text-[#E4E4E4] text-sm md:text-base leading-5 md:leading-6 text-left py-4">
                  ⎯{'   '}
                  <Link href="https://www.parth.ski" className="text-[#4285F4] underline underline-offset-2 md:underline-offset-4	decoration-from-font">
                    Parth Patel
                  </Link>
                </Text>   
              </Section>
            </Section>
            <Section>
              <Hr className="border-[#3F3F3F] my-4 md:my-8"/>
              <Text className="text-[#3F3F3F] text-xs md:text-sm leading-4 text-left">
                We are{' '}
                <Link href="https://eastpark.xyz" className="text-[#4285F4] underline underline-offset-2 md:underline-offset-4 decoration-from-font">
                  East Park
                </Link>
                . We build, foster, and invest in things that forge a greener, more accessible, and joyfully brighter future.
              </Text>
              <Text className="text-[#3F3F3F] text-xs md:text-sm leading-4 text-left">
                This email was sent to { email }. If you’d rather not receive this kind of email, you can{' '} 
                <Link href={`${baseUrl}/unsubscribe?email=${encodeURIComponent(email)}`} className="text-[#4285F4] underline underline-offset-2 md:underline-offset-4 decoration-from-font">
                unsubscribe
                </Link>
                {' '}at any time.
              </Text>
              <Hr className="border-[#3F3F3F] my-4 md:my-8"/>
            </Section>
            <Section>
              <Text className="text-[#3F3F3F] text-xs md:text-sm no-underline decoration-from-font leading-4 text-left">
                © 2023 East Park Holdings Group.,<br/>
                25 Clinton St. New York City,<br/>
                New York 10002
              </Text>
            </Section>
            <Section>
              <Row>
                <Section className="pr-8 pt-2">
                  <Link href="tel:+16467594054" className="text-[#4285F4] underline underline-offset-2 md:underline-offset-4 decoration-from-font text-xs md:text-sm leading-4 pr-4  md:pr-16">
                    +1 (646) 759 4054
                  </Link>
                  <Link href={`${baseUrl}/unsubscribe?email=${encodeURIComponent(email)}`} className="text-[#4285F4] underline underline-offset-2 md:underline-offset-4 decoration-from-font text-xs md:text-sm leading-4">
                    Unsubscribe
                  </Link>
                </Section>
                <Section className="pr-8 pt-2">
                  <Link href="mail:info@eastpark.xyz" className="text-[#4285F4] underline underline-offset-2 md:underline-offset-4 decoration-from-font text-xs md:text-sm leading-4 pr-4  md:pr-16">
                    info@eastpark.xyz
                  </Link>
                  <Link href="https://resend.com/shared?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsX2lkIjoiOGQ2MDI4YjMtMGEyYy00MmE1LWEwYjEtMjYxNGU2NTI0ZDI1In0sImlhdCI6MTY5MzI4ODgwNiwiZXhwIjoxNjkzNDYxNjA2fQ.0kktdj8N94z1WP1KmVSbr6bsBvW6mYEWCxyrXiG3dmM" className="text-[#4285F4] underline underline-offset-2 md:underline-offset-4 decoration-from-font text-xs md:text-sm leading-4">
                    View in browser
                  </Link>
                </Section>
              </Row>
            </Section>
      </Container>
    </Body>
  </Html>
</Tailwind>
);
}