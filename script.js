const ACCESS_TOKEN =
  "ya29.a0AWY7CkmTzha6YnWZgtot-4rU16NLezd7rLaPIvDsD5Tjl2pYS6m_CCQOCJeIz1EUK421GhUK-aDEW7N4gm0YG9psBjxmtYh_daYfYpv65lWnhdHOkaKxhm8BgdrD9wmON5DG5AfjAtZ8bus1pjxbQMwZ0b5X8oUaCgYKATcSARMSFQG1tDrpZt7h-PeTQkZxy83bag7fBg0166";

const SHEET_ID = "1q9K2fSYYZdytUVWdVLa5ndSKVQiR5NLIOIcVGBYoJYk";

function onRegistrarDato() {
  //Se obtienen los datos
  const NOMBRE = document.getElementById("nombre").value;
  const APELLIDO = document.getElementById("apellido").value;
  const DOCTOR = document.getElementById("doctor").value;
  const FECHA = document.getElementById("fecha").value;
  const HORARIOS = document.getElementById("horarios").value;
  const OBS = document.getElementById("obs").value;

  //let data = {};
  let values = [];
  let fila = [NOMBRE, APELLIDO, FECHA, HORARIOS, DOCTOR, OBS, false];

  values.push(fila);
  let data = {
    range: "enEspera!A1:Z500",
    majorDimension: "ROWS",
    values: [fila],
  };

  console.log(values);

  fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/enEspera!A1:Z1000:append?valueInputOption=USER_ENTERED`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify(data),
    }
  )
    .then((response) => {
      console.log("La API responde", response.data);
    })
    .catch((error) => {
      console.log("Error:", error);
    });

  //window.location.reload();
}
