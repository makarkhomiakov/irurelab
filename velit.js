const timeZoneMapping = {
  'Australia/Canberra': 'Australia/Sydney',
  // other mappings can be added here
};

// Usage example:
const originalTimeZone = 'Australia/Canberra';
const mappedTimeZone = timeZoneMapping[originalTimeZone] || originalTimeZone;
console.log(mappedTimeZone); // Output: Australia/Sydney
