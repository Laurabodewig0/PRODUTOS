const livros = [
{id: 1, titulo:'Harry Potter', autor:'J.K', ano:'1997', genero:'Fantasia'},
{id: 2, titulo:'A Batalha das ardenas', autor:'Antony Beevor', ano:'2018', genero:'Guerra'},
{id: 3, titulo:'Girls und Panzer', autor:'Ryouichi Saitaniya', ano:'2012'}
];


const estudantes = [
{id:1, nome:'Alexandre', matricula:'01', curso:'Historia', ano:'2024'},
{id:2, nome:'Felipe', matricula:'02', curso:'Linguas', ano:'2010'},
{id:3, nome:'Lucio', matricula:'03', curso:'Astrologia', ano:'2008'}
];

const aluguel = [
    {id:1, idLivro:'002', idEstudante:'01', dataAluguel:'15-02-2005'},
    {id:2, idLivro:'003', idEstudante:'02', dataAluguel:'02-12-2000'},
    {id:3, idLivro:'001', idEstudante:'03', dataAluguel:'04-02-1320'}
];

module.exports = {livros, estudantes, aluguel}