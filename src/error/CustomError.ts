export class CustomError extends Error {
  constructor(statusCode: number, message: string) {
    super(message);
  }
}

export class Unauthorized extends CustomError {
  constructor() {
    super(401, "Usuário não autorizado.");
  }
}

export class FieldsNotProvided extends CustomError {
  constructor() {
    super(400, 'Preencha os campos "name", "email", "password" e "role".');
  }
}

export class EmailAlreadyInUse extends CustomError {
  constructor() {
    super(409, "Este email já está em uso por outra conta.");
  }
}

export class InvalidName extends CustomError {
  constructor() {
    super(400, "Muito curto para ser um nome.");
  }
}

export class InvalidEmail extends CustomError {
  constructor() {
    super(400, "Forneça um email válido.");
  }
}

export class InvalidPassword extends CustomError {
  constructor() {
    super(400, "A senha deve ter no mínimo 6 caracteres.");
  }
}

export class InvalidRole extends CustomError {
  constructor() {
    super(422, 'A propriedade "role" deve ser "admin" ou "user".');
  }
}

export class UserNotFound extends CustomError {
  constructor() {
    super(404, "Usuário não encontrado");
  }
}

export class InvalidToken extends CustomError {
  constructor() {
    super(404, "Esse token é inválido");
  }
}

export class MissingInformation extends CustomError {
  constructor() {
    super(
      400,
      'É necessário completar os campos "name ", "musicalGenre"  e "responsible".'
    );
  }
}

export class MissingToken extends CustomError {
  constructor() {
    super(400, "É necessário fornecer um token.");
  }
}

export class BandAlreadyRegistered extends CustomError {
  constructor() {
    super(409, "Banda Já Cadastrada");
  }
}

export class InvalidFields extends CustomError {
  constructor() {
    super(400, "Campos inválidos.");
  }
}

export class InvalidTime extends CustomError {
  constructor() {
    super(400, "Horário inválido");
  }
}

export class InvalidWeekday extends CustomError {
  constructor() {
    super(
      400,
      "O weekday selecionado é inválido!! Selecione entre FRIDAY, SATURDAY ou SUNDAY"
    );
  }
}

export class InvalidDay extends CustomError {
  constructor() {
    super(
      400,
      "O weekday selecionado é inválido!! Selecione entre friday, saturday ou sunday"
    );
  }
}

export class TimeAlreadyRegistered extends CustomError {
  constructor() {
    super(409, "Data e horário já registrados no cronograma de shows");
  }
}

export class InvalidID extends CustomError {
  constructor() {
    super(400, "ID inválido");
  }
}

export class InvalidShow extends CustomError {
  constructor() {
    super(400, "Show não encontrado no banco de dados");
  }
}