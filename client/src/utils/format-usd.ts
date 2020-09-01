const formatter = Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});

export default function formatUSD(value: number) {
    return formatter.format(value).replace(/\D00$/, '');
}