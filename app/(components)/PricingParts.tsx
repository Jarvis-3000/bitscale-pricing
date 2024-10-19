import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';

export const IntervalToggler = ({
  interval,
  onChange,
}: {
  interval: string;
  onChange: Dispatch<SetStateAction<'monthly' | 'annually'>>;
}) => {
  return (
    <div
      className='flex items-center rounded-xl bg-blue-100 p-1'
      role='group'
      aria-label='Pricing Interval Toggle'
    >
      <button
        aria-label='Switch to Monthly Plan'
        className={cn(
          'h-10 py-2 px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-100 text-sm text-gray-800 font-medium rounded-[10px]',
          interval === 'monthly' ? 'bg-white' : 'bg-transparent'
        )}
        onClick={() => onChange('monthly')}
      >
        Monthly
      </button>
      <button
        aria-label='Switch to Annual Plan'
        className={cn(
          'h-10 py-2 px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-100 text-sm text-gray-800 font-medium rounded-[10px]',
          interval === 'annually' ? 'bg-white' : 'bg-transparent'
        )}
        onClick={() => onChange('annually')}
      >
        Annually
      </button>
    </div>
  );
};

export const PricingContainer = ({
  children,
  popular = false,
}: {
  children: React.ReactNode | React.ReactNode[];
  popular?: boolean;
}) => {
  return (
    <section
      className={cn(
        'w-full flex flex-col relative py-5 px-6 text-app border border-zinc-200 hover:border-blue-400 hover:shadow-blue-400 rounded-xl shadow transition-all duration-300',
        popular
          ? 'bg-gradient-to-t from-[#0B1839] to-[#1E429F] border-blue-500 shadow-blue-500'
          : 'bg-white'
      )}
      aria-label={popular ? 'Popular Pricing Plan' : 'Pricing Plan'}
    >
      {children}
    </section>
  );
};

export const Title = ({
  title,
  popular,
}: {
  title: string;
  popular?: boolean;
}) => {
  return (
    <h3
      className={`text-lg font-semibold ${
        popular ? 'text-white' : 'text-[#1F2A37]'
      }`}
      aria-label={`Plan Title: ${title}`}
    >
      {title}
    </h3>
  );
};

export const OfferBadge = ({ offer }: { offer: number }) => {
  return (
    <div
      className='flex gap-1 items-center text-xs bg-[#ECFDF3] rounded-full py-1.5 px-3'
      aria-label={`${offer}% off`}
    >
      <Image
        src='/percentageIcon.svg'
        width={20}
        height={20}
        alt='Percentage discount icon'
        className='h-4 w-4 fill-[#027A48]'
      />
      <span className='text-[#027A48]'>${offer}% off</span>
    </div>
  );
};

export const OfferedAndCancelledPrices = ({
  offered,
  cancelled,
  interval,
  offer,
  popular,
  className = '',
}: {
  offered: number;
  cancelled: number;
  interval: 'monthly' | 'annually';
  offer: number;
  popular?: boolean;
  className?: string;
}) => {
  return (
    <div className={cn('flex flex-col gap-2 ', className)}>
      <div className='flex items-end gap-2'>
        <span
          className={cn(
            'text-4xl font-extrabold',
            popular ? 'text-white' : 'text-[#111928]'
          )}
        >
          ${offered}
        </span>
        {interval && (
          <span
            className={cn(
              'font-medium',
              popular ? 'text-white' : 'text-[#6B7280] '
            )}
            aria-label={`Billing interval: ${interval}`}
          >
            /{interval}
          </span>
        )}
      </div>
      <div className='flex flex-wrap-reverse items-center gap-4'>
        <OfferBadge offer={offer!} />
        <span
          className={cn(
            'text-3xl font-extrabold line-through',
            popular ? 'text-[#EBF5FF]' : 'text-[#6B7280]'
          )}
          aria-label={`Cancelled Price: $${cancelled}`}
        >
          ${cancelled}
        </span>
      </div>
    </div>
  );
};

export const PopularBadge = () => {
  return (
    <span
      className='text-[#053D99] text-xs font-medium bg-[#CEE0FF] py-1 px-3 rounded-full'
      aria-label='Popular Plan'
    >
      Popular
    </span>
  );
};

export const BigText = ({
  text,
  popular,
  className = '',
}: {
  text: string;
  popular?: boolean;
  className?: string;
}) => {
  return (
    <div>
      <p
        className={cn(
          'text-4xl font-extrabold',
          popular ? 'text-white' : 'text-gray-900',
          className
        )}
        aria-label={`Price: ${text}`}
      >
        {text}
      </p>
    </div>
  );
};

export const Description = ({
  text,
  popular,
  className = '',
}: {
  text: string;
  popular?: boolean;
  className?: string;
}) => {
  return (
    <div>
      <p
        className={cn(
          'text-sm',
          popular ? 'text-white' : 'text-gray-500',
          className
        )}
        aria-label='Plan description'
      >
        {text}
      </p>
    </div>
  );
};

export const FeatureList = ({
  features,
  popular,
  highlightFirst = false,
  className = '',
}: {
  features: string[];
  popular?: boolean;
  highlightFirst?: boolean;
  className?: string;
}) => {
  return (
    <ul
      className={cn(
        'flex flex-col gap-y-4 border-b pb-10 flex-1 mt-8',
        popular ? '' : 'border-blue-400',
        className
      )}
      aria-label='List of Features'
    >
      {features.map((feature: string, index: number) => (
        <li key={index} className='flex gap-3'>
          <div
            className={cn(
              `h-4 w-4 shrink-0 rounded-full p-0.5 mt-1`,
              highlightFirst && index === 0
                ? 'bg-blue-700 font-semibold'
                : popular
                ? 'bg-white'
                : 'bg-[#374151]'
            )}
          >
            <svg
              viewBox='0 0 14 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              aria-label={`Feature: ${feature}`}
            >
              <path
                d='M3 7L5.2 10.5L10 5'
                stroke={popular ? '#000000' : '#FFFFFF'}
                strokeWidth='1.5'
              ></path>
            </svg>
          </div>
          <p
            className={`${
              highlightFirst && index === 0
                ? 'text-blue-700 font-bold'
                : popular
                ? 'text-white'
                : 'text-gray-500'
            } `}
          >
            {feature}
          </p>
        </li>
      ))}
    </ul>
  );
};

export const ExtraFeatureList = ({
  features,
  popular,
  className = '',
}: {
  features: string[];
  popular?: boolean;
  className?: string;
}) => {
  return (
    <ul
      className={cn(
        'flex flex-col gap-y-4 pb-10 list-disc mt-5 md:min-h-36 lg:min-h-44',
        className
      )}
      aria-label='Additional Features'
    >
      {features.map((feature: string, index: number) => (
        <li key={index} className='flex items-start gap-2 list-disc'>
          <span className={`${popular ? 'text-white' : 'text-gray-500'}`}>
            •
          </span>
          <p
            className={`font-semibold ${
              popular ? 'text-white' : 'text-gray-500'
            }`}
          >
            {feature}
          </p>
        </li>
      ))}
    </ul>
  );
};

// Call to action button
export const CtaButton = ({
  text,
  popular,
  className = '',
}: {
  text: string;
  popular?: boolean;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        'h-10 py-2 px-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200 text-sm rounded-lg',
        popular
          ? 'bg-white hover:bg-gray-100 text-gray-800'
          : 'bg-blue-700 hover:bg-blue-800 text-white',
        className
      )}
      aria-label={`Call to Action: ${text}`}
    >
      {text}
    </button>
  );
};
