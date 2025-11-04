import { BuyBoxData, ScorecardCategory, ScorecardFaqItem } from './types';
import { CalendarIcon, CashFlowIcon, EntryFeeIcon, HomeValueIcon, InterestRateIcon, RehabIcon } from './components/Icons';

export const BUY_BOX_DATA: BuyBoxData[] = [
  {
    title: 'Supportive & Shared Housing',
    description: 'Properties primed for mission-driven, stable housing solutions for vulnerable populations. We turn these assets into safe harbors.',
    bullets: [
      'Asset Types: SFR, small multifamily (2-10 units), townhomes, property clusters.',
      'Geography: Las Vegas / Clark County (Primary); NV, AZ, OR, CA (Secondary).',
      'Use Cases: Sober living, veterans, reentry, DV survivors, aged-out foster youth.',
      'Condition: From turnkey to full cosmetic rehab. Major structural issues are case-by-case.',
      'Deal Profile: Off-market, creative finance, flexible sellers.',
      'Deal Killers: Impossible zoning, irreparable structural damage, unsafe locations.'
    ],
    ctaText: 'For these deals, send address, photos, and context on the property’s potential use.'
  },
  {
    title: 'Small Multifamily & Clusters',
    description: 'Duplexes to small apartment buildings where we can add value, stabilize operations, and provide quality long-term rentals.',
    bullets: [
      'Unit Count: 2-20 units. Can be single property or a portfolio of smaller buildings.',
      'Vintage: Any, as long as the property is structurally sound.',
      'Neighborhoods: B & C class areas with solid rental demand and access to transit/services.',
      'Strategy: Value-add, stabilization, operational turnarounds, long-term holds.',
      'Financing: Open to creative structures, assumptions, and Joint Ventures.',
      'Deal Killers: Severe legal entanglements, non-cooperative HOAs, rent control limitations.'
    ],
    ctaText: 'For multifamily, we need the rent roll, T12/financials, and a list of capex needs.'
  },
  {
    title: 'Pre-Foreclosure & Creative Finance',
    description: 'Situations requiring speed and creative solutions. We help owners exit gracefully while structuring a win-win deal.',
    bullets: [
      'Situations: Behind on payments, inherited properties, tired landlords, vacant/distressed.',
      'Asset Types: Primarily SFR and small multifamily (2-4 units).',
      'Geography: Focused on our primary and secondary markets.',
      'Structures: Subject-To, Wraps, Seller Finance, Novations, Hybrids.',
      'Seller Profile: Motivated, flexible, communicative, and realistic about their situation.',
      'Deal Killers: Wants full retail price + needs cash out + has zero flexibility on terms.'
    ],
    ctaText: 'For creative deals, send the address, loan details (payoff, PITI), and seller’s needs.'
  },
  {
    title: 'Master Lease & Program Partnerships',
    description: 'For landlords with vacancy issues who want stable, long-term income without the management headaches.',
    bullets: [
      'Owner Profile: Landlords with 3+ vacant units, portfolio owners, operators tired of turnover.',
      'Asset Types: Small to medium multifamily, blocks of condos/townhomes, single family homes.',
      'Market Focus: Clark County, NV and surrounding metros.',
      'Our Offer: Guaranteed master rent payment, professional operations, and mission-driven tenancy.',
      'Term Length: We prefer 3-5 year terms with options to extend.',
      'Deal Killers: Slumlord conditions, refusal to maintain habitable standards, bad-faith negotiations.'
    ],
    ctaText: 'For partnerships, send property details, number of vacant units, and desired rent.'
  }
];


export const SCORECARD_DATA: ScorecardCategory[] = [
  {
    id: 'balloonPayment',
    title: 'Balloon Payment',
    Icon: CalendarIcon,
    options: [
      { label: 'Select Term...', value: -1 },
      { label: 'No balloon', value: 10 },
      { label: '15.1-20 years', value: 9 },
      { label: '10.1-15 years', value: 8 },
      { label: '9.1-10 years', value: 7 },
      { label: '8.1-9 years', value: 6 },
      { label: '7.1-8 years', value: 5 },
      { label: '6.6-7 years', value: 4 },
      { label: '6.1-6.5 years', value: 3 },
      { label: '5.1-6 years', value: 2 },
      { label: '4-5 years', value: 1 },
      { label: 'Under 4 years', value: 0 },
    ]
  },
  {
    id: 'asIsValue',
    title: 'As-Is Value',
    subtitle: 'ARV minus repairs',
    Icon: HomeValueIcon,
    options: [
      { label: 'Select LTV...', value: -1 },
      { label: 'Under 70%', value: 10 },
      { label: '70.1%-75%', value: 9 },
      { label: '75.1%-80%', value: 8 },
      { label: '80.1%-85%', value: 7 },
      { label: '85.1%-90%', value: 6 },
      { label: '90.1%-92.5%', value: 5 },
      { label: '92.6%-95%', value: 4 },
      { label: '95.1%-97.5%', value: 3 },
      { label: '97.6%-99.1%', value: 2 },
      { label: '100%-105%', value: 1 },
      { label: 'Over 105%', value: 0 },
    ]
  },
  {
    // Fix: Changed 'ltrCash Flow' to 'ltrCashFlow' to match ScorecardScores type
    id: 'ltrCashFlow',
    title: 'LTR Cash Flow',
    subtitle: 'After 20% War Chest',
    Icon: CashFlowIcon,
    options: [
      { label: 'Select Cash Flow...', value: -1 },
      { label: 'Over $500', value: 10 },
      { label: '$401-$500', value: 9 },
      { label: '$351-$400', value: 8 },
      { label: '$301-$350', value: 7 },
      { label: '$251-$300', value: 6 },
      { label: '$201-$250', value: 5 },
      { label: '$151-$200', value: 4 },
      { label: '$101-$150', value: 3 },
      { label: '$51-$100', value: 2 },
      { label: '$1-$50', value: 1 },
      { label: 'Negative Cash Flow', value: 0 },
    ]
  },
  {
    id: 'rehabNeeded',
    title: 'Rehab Needed',
    Icon: RehabIcon,
    options: [
      { label: 'Select Budget...', value: -1 },
      { label: '$0', value: 10 },
      { label: '$1-$2,500', value: 9 },
      { label: '$2,501-$3,500', value: 8 },
      { label: '$3,501-$5,000', value: 7 },
      { label: '$5,001-$6,000', value: 6 },
      { label: '$6,001-$7,000', value: 5 },
      { label: '$7,001-$8,000', value: 4 },
      { label: '$8,001-$9,000', value: 3 },
      { label: '$9,001-$10,000', value: 2 },
      { label: '$10,001-$12,000', value: 1 },
      { label: 'Over $12,000', value: 0 },
    ]
  },
  {
    id: 'entryFee',
    title: 'Entry Fee',
    Icon: EntryFeeIcon,
    options: [
      { label: 'Select Fee %...', value: -1 },
      { label: 'Under 5%', value: 10 },
      { label: '5.1% to 8%', value: 9 },
      { label: '8.1% to 10%', value: 8 },
      { label: '10.1-11%', value: 7 },
      { label: '11.1-12%', value: 6 },
      { label: '12.1-13%', value: 5 },
      { label: '13.1-14%', value: 4 },
      { label: '14.1-15%', value: 3 },
      { label: '15.1-16%', value: 2 },
      { label: '16.1-17%', value: 1 },
      { label: 'Over 17%', value: 0 },
    ]
  },
  {
    id: 'interestRate',
    title: 'Interest Rate',
    Icon: InterestRateIcon,
    options: [
      { label: 'Select Rate...', value: -1 },
      { label: '0-1%', value: 10 },
      { label: '1.1-2%', value: 9 },
      { label: '2.1-3%', value: 8 },
      { label: '3.1-3.5%', value: 7 },
      { label: '3.6-4%', value: 6 },
      { label: '4.1-4.25%', value: 5 },
      { label: '4.26-4.5%', value: 4 },
      { label: '4.6-5%', value: 3 },
      { label: '5.1-5.75%', value: 2 },
      { label: '5.76-6.5%', value: 1 },
      { label: 'Over 6.5%', value: 0 },
    ]
  },
];


export const SCORECARD_FAQ_DATA: ScorecardFaqItem[] = [
  {
    question: 'What is "As Is" Value?',
    answer: 'The "As Is" Value is the purchase price and the percentage shows how much equity the home has available in its current condition.',
    example: 'Under 70% means the home is being bought with at least 30% equity and that\'s great!',
  },
  {
    question: 'What is a Balloon Payment?',
    answer: 'This is the date the loan is due in full. It\'s usually a date before the official "Maturity" date, which is the end of an amortized loan.',
    example: 'If you have a 30-year amortized loan with a 5-year balloon, you make payments based on a 30-year schedule, but the entire remaining balance is due at the end of the 5th year.',
  },
  {
    question: 'What is a "War Chest"?',
    answer: 'A war chest is an amount of money you set aside for vacancy and repairs from your gross cashflow.',
    example: 'If the home rents for $1,000 a month and you set aside 20%, then you would need to calculate your true cash flow after debt servicing and war chest is accounted for. If there is $300 or more left over, that\'s a pretty good deal!',
  },
  {
    question: 'What is an "Entry Fee"?',
    answer: 'An entry fee is the total amount of money required to purchase the property and usually includes rehab + anything you would pay to settle the deal. The percentage is based off the purchase price.',
    example: 'If you buy a $100K house and your ALL in cost to buy the property is $5K, that would be 5% and that\'s an amazing entry fee!',
  },
];