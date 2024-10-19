'use client';

import { useState } from 'react';
import {
  BigText,
  CtaButton,
  Description,
  ExtraFeatureList,
  FeatureList,
  IntervalToggler,
  OfferedAndCancelledPrices,
  PopularBadge,
  PricingContainer,
  Title,
} from './PricingParts';

export const Pricing = () => {
  const [interval, setInterval] = useState<'monthly' | 'annually'>('monthly');

  return (
    <div>
      <div className='flex flex-col items-center'>
        <IntervalToggler interval={interval} onChange={setInterval} />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 2xl:px-20 mt-5 lg:mt-10'>
        {/* Trial */}
        <PricingContainer>
          <Title title='Trial' />
          <BigText text='Try Now' className='mt-4' />
          <Description text='Get personalized template' className='mt-2' />
          <FeatureList
            features={[
              '25+ data sources',
              'GPT4, LinkedIn and others',
              'Access to slack community',
              '10+ templates to scale your outbound',
            ]}
          />
          <ExtraFeatureList features={['Explore product capabilities']} />
          <CtaButton text='Try Now' className='w-full mt-5' />
        </PricingContainer>
        {/* Growth */}
        <PricingContainer>
          <Title title='Growth' />
          <OfferedAndCancelledPrices
            offered={interval === 'monthly' ? 229 : 229 * 11}
            cancelled={interval === 'monthly' ? 459 : 459 * 11}
            interval={interval}
            offer={50}
            className='mt-4'
          />
          <FeatureList
            features={[
              '8,000 Credits',
              'Webhook, HTTP API',
              'Credit rollover (upto 2x plan credits)',
              'Outbound email integrations like Instantly, Smartlead',
              'Dedicated 3 hours from Bitscale expert',
            ]}
            highlightFirst
          />
          <ExtraFeatureList
            features={[
              'Unlimited leads search',
              'Fully enriched 5000 leads',
              'Personalized outreach at scale',
            ]}
          />
          <CtaButton text='Continue with Growth' className='w-full mt-5' />
        </PricingContainer>
        {/* Booster */}
        <PricingContainer popular>
          <div className='flex items-center justify-between'>
            <Title title='Booster' popular />
            <PopularBadge />
          </div>
          <OfferedAndCancelledPrices
            offered={interval === 'monthly' ? 499 : 499 * 11}
            cancelled={interval === 'monthly' ? 999 : 999 * 11}
            interval={interval}
            offer={50}
            className='mt-4'
            popular
          />
          <FeatureList
            features={[
              '25,000 Credits',
              'Webhook, HTTP API',
              'Credits rollover (upto 2x plan credits)',
              'Outbound email integrations like instantly, Smartlead.',
              'Advanced models like Claude Sonnet',
              'Dedicated 8 hours from Bitscale expert',
              '2 way Hubspot integration',
            ]}
            popular
          />
          <ExtraFeatureList
            features={[
              'Unlimited leads search',
              'Fully enriched 15000 leads',
              'Personalized outreach at scale',
            ]}
            popular
          />
          <CtaButton
            text='Continue with Booster'
            className='w-full mt-5'
            popular
          />
        </PricingContainer>
        {/* Enterprise */}
        <PricingContainer>
          <Title title='Enterprise' />
          <BigText text='Contact Us' className='mt-4' />
          <Description text='For individual pricing' className='mt-2' />
          <FeatureList
            features={[
              'Data privacy certification',
              'Priority Support',
              'Dedicated Bitscale expert',
              'Private Slack Channel',
              'Collaborative workspace and templates',
            ]}
          />
          <ExtraFeatureList
            features={[
              'Perfect for end to end CRM data enrichment with high volume',
              'Unlimited list of leads with unlimited data points',
            ]}
          />
          <CtaButton text='Try Now' className='w-full mt-5' />
        </PricingContainer>
      </div>
    </div>
  );
};
