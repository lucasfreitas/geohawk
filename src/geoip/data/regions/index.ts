import { northAmerica } from './north-america';
import { southAmerica } from './south-america';
import { europe } from './europe';
import { asia } from './asia';
import { asiaPartTwo } from './asia-part2';
import { africa } from './africa';
import { oceania } from './oceania';
import { CountryData } from '../../interfaces/country-data.interface';

// Combine all regions
export const allCountries: Record<string, CountryData> = {
  ...northAmerica,  // 12 countries (North America + Caribbean + Central America)
  ...southAmerica,  // 12 countries (All South American nations)
  ...europe,        // 37 countries (27 EU + 10 non-EU)
  ...asia,          // 15 countries (East Asia + Southeast Asia + South Asia + Middle East)
  ...asiaPartTwo,   // 13 countries (More Middle East + Central Asia + More South/Southeast Asia)
  ...africa,        // 18 countries (North + West + East + Southern Africa)
  ...oceania        // 7 countries (Australia + New Zealand + Pacific Islands)
};

// Export individual regions
export {
  northAmerica,
  southAmerica,
  europe,
  asia,
  asiaPartTwo,
  africa,
  oceania
};

// Total number of countries: 114 countries
// This represents about 58% of the world's countries (195 total)
// Current coverage by region:
// - Europe: Complete coverage of EU and major non-EU countries
// - Americas: All major countries in North and South America
// - Asia: Major economies and population centers
// - Africa: Major economies and regional leaders
// - Oceania: Major countries and significant Pacific islands

// Future improvements could include:
// 1. Adding remaining African nations
// 2. Adding more Caribbean island nations
// 3. Adding more Pacific island nations
// 4. Adding remaining Asian countries
// 5. Adding microstates (Monaco, Vatican City, etc.)
// 6. Adding autonomous regions (Hong Kong, Macau, etc.)
// 7. Adding overseas territories
// 8. Adding disputed territories with de facto independence

// Data quality:
// - All countries include accurate currency information
// - Native language names and scripts
// - Correct time zones
// - Proper TLD information including IDN TLDs
// - EU membership status
// - Official currency codes and symbols
// - Native currency names and symbols
// - Multiple languages where applicable
// - Unicode-compliant emoji flags
