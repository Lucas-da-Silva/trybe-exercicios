const { uppercase } = require('./uppercase');

it('test if uppercase function capitalizes any word', (done) => {
    uppercase('My name is Lucas', (newString) => {
        try{
            expect(newString).toBe('MY NAME IS LUCAS');
            done();
        } catch (error) {
            done(error);
        }
    });
});
