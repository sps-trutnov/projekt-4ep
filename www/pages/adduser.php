<div class="half left" id="fromForm">
  Křestní jméno:
  <input type="text" id="jmeno" name="">
  Příjmení:
  <input type="text" id="prijmeni" name="">
  E-Mail:
  <input type="text" id="email" name="">
  Heslo:
  <input type="password" id="heslo" value="heslo">

  <a href="#" id="addUserForm">Přidat uživatele</a>
</div>
<div class="half right center" id="fromFile">
  <h2>Import ze souboru</h2>

  <p>*Slouží pro více uživatelů</p>
  <table class="center small">
    <tr><td>Data musí být v pořadí: </td></tr>
    <tr><td>Jméno, příjmení, email, heslo (nemusí být)</td></tr>
    <tr><td>např.</td></tr>
    <tr><td>Jan,Novák,novak@spstrutnov.cz,heslo</td></tr>
    <tr><td>Václav,Novotný,novotny@spstrutnov.cz,heslo123</td></tr>
  </table>

  <input type="file" id="file" class="center" size="40" accept="text/plain">
  <a href="#" id="addUsersFromFile">Přidat</a>
</div>
