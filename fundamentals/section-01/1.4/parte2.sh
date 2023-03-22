1- Navegue até a pasta unix_tests;

cd unix_testes;

2- Rode o comando ls -l e veja quais as permissões dos arquivos;

ls -l

3- Mude a permissão do arquivo bunch_of_things.txt para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l;

chmod o+w bunch_of_things.txt

4- Tire a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verifique se está correto com o comando ls -l;

chmod a-w bunch_of_things.txt

5- Volte à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando chmod 644 bunch_of_things.txt.

chmod u+w bunch_of_things.txt