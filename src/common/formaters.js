export function formatCurrency(value) {
    return (value.split(",")[0] * 1)
        .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}