import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../Redux/Auth';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

 const handleSubmit = event => {
  event.preventDefault();
  const payload = {
    name,
    email,
    password,
  };
  dispatch(authOperations.register(payload));
  setName('');
  setEmail('');
  setPassword('');
  };

  return (
    <div>
    <h1>Страница регистрации</h1>

    <form
      onSubmit={handleSubmit}
      style={styles.form}
      autoComplete="off"
    >
      <label style={styles.label}>
        Имя
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
      </label>

      <label style={styles.label}>
        Почта
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>

      <label style={styles.label}>
        Пароль
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>

      <button type="submit">Зарегистрироваться</button>
    </form>
  </div>
  );
};


/* class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
      <h1>Страница регистрации</h1>

      <form
        onSubmit={this.handleSubmit}
        style={styles.form}
        autoComplete="off"
      >
        <label style={styles.label}>
          Имя
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>

        <label style={styles.label}>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>

        <label style={styles.label}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView); */