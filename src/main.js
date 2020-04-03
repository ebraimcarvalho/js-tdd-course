const city = 'Ireland';
const something = 'Guinness';
const otherthing = 'Leprachaums';

function green(template, ...values) {
  return template.reduce((acc, att, i) => `${acc}
      <span class="green">${values[i - 1]}</span>
      ${att}
    `);
}

const ireland = green`I live in ${city}, the city of ${something} and ${otherthing}`;

document.body.innerHTML = ireland;
