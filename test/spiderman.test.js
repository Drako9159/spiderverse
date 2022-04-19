const Spiderman = require('../app/spiderman.js')
/*describe("Unit test for spiderman class", () => {
    test('1)Create an spiderman objet', () => {
        //Código a usar
        //Instanciar un objeto Spiderman con parámetros
        const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 31, "Sony")
        //Validamos con el código
        expect(andrewGarfield.name).toBe("Spiderman Sony")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe("Andrew Garfield")
        expect(andrewGarfield.movies).toBe(31)
        expect(andrewGarfield.studio).toBe("Sony")
    });
  })*/
  describe("Unit test for spiderman class", () => {
      test('1)Create an spiderman objet',() => {
          const tomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel")
          expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")

      })
  })