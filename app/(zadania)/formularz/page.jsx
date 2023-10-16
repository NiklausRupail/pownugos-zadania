import styles from './page.module.scss';

const formPage = () => {
  return (
    <main className={styles.main}>
      <form className={styles.mainForm}>
        <label>Nick</label>
        <input type='text' placeholder='Twój nick z CS:GO'></input>
        <label>Hasło</label>
        <input type='password'></input>
        <label>Powtórz Hasło</label>
        <input type='password'></input>
        <label>Data urodzenia</label>
        <input type='date'></input> <br></br>
        <label>Ile Grasz w CS</label>
        <input type='number' min='1' max='30'></input>
        <label>Płeć</label>
        <br></br>
        <input type='radio' value='Mężczyzna'></input>
        <label>Mężczyzna</label>
        <br></br>
        <input type='radio' value='Kobieta'></input>
        <label>Kobieta</label>
        <br></br>
        <br></br>
        <input type='checkbox' checked></input>
        <label>Akceptuję regulamin serwisu</label>
        <br></br>
        <input type='checkbox'></input>
        <label> Wyrażam zgodę na otrzymywanie newslettera</label>
        <br></br>
        <br></br>
        <label> Ulubiona Broń:</label>
        <select>
          <option>Five-SeveN</option>
          <option>Desert Eagle</option>
          <option>PP-Bizon</option>
          <option>AWP</option>
          <option>MP9</option>
          <option>AK-47</option>
        </select>
        <select name='cars' id='cars' multiple>
          <option>Dust II</option>
          <option>Mirage</option>
          <option>Inferno</option>
          <option>Cache</option>
          <option>Train</option>
          <option>Nuke</option>
        </select>
        <label>
          <small>
            Opisz swoją przygodę z CS:GO, dlaczego wybrałeś akurat nasz klan?
          </small>
        </label>
        <textarea></textarea>
        <input value='Zarejestruj Się!' type='submit'></input>
      </form>
    </main>
  );
};
export default formPage;
