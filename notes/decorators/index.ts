class Field {
  errors: string[];

  input: HTMLInputElement;

  constructor(input: HTMLInputElement) {
    this.input = input;
    this.errors = [];

    const errorMessage = document.createElement('p');
    errorMessage.className = 'text-danger';
    this.input.parentNode.insertBefore(errorMessage, this.input.nextSibling);

    this.input.addEventListener('input', () => {
      this.errors = [];
      this.validate();
      errorMessage.innerText = this.errors[0] || '';
    });
  }

  // eslint-disable-next-line class-methods-use-this
  validate() {}
}

function RequiredFieldDecorator(field: Field): Field {
  const { validate } = field;

  // eslint-disable-next-line no-param-reassign
  field.validate = () => {
    validate();
    const { value } = field.input;
    if (!value) {
      field.errors.push('Requerido');
    }
  };

  return field;
}

function EmailFieldDecorator(field: Field): Field {
  const { validate } = field;

  field.validate = () => {
    validate();
    const { value } = field.input;

    if (value.indexOf('@') === -1) {
      field.errors.push('Debe ser un email');
    }
  };

  return field;
}

let field = new Field(document.querySelector('#email'));
field = RequiredFieldDecorator(field);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
field = EmailFieldDecorator(field);
