import Daemon from "../Daemon";
import Magician from "../Magician";

test('Атака мага без дурмана', () => {
  const magician = new Magician('Magician');
  magician.attack = 100;
  const result = magician.attack;
  expect(result(2)).toEqual(90);
});

test("Атака демона под дурманом", () => {
  const daemon = new Daemon("Daemon");
  daemon.attack = 100;
  daemon.stoned = true;
  const result = daemon.attack;
  expect(result(2)).toEqual(85);
});