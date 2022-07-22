function calcular_etiquetas(){

    clear_div();
    /*
    total_etiquetas
    vias_cortante
    vias_usadas
    vias_rolo
    quantidade_por_rolo*/

    var total_etiquetas = document.getElementById('total_etiquetas').value; //total de etiquetas da OP
    var vias_cortante = document.getElementById('vias_cortante').value; //vias do cortante
    var vias_rolo = document.getElementById('vias_rolo').value; //vias de etiquetas por rolos
    var quantidade_por_rolo = document.getElementById('quantidade_por_rolo').value; //quantidade de etiquetas por rolo
    var metros_por_rolo = document.getElementById('metros_por_rolo').value; //quantidade de etiquetas por rolo
    

    //saber quantos rolos serão feitos de uma vez

    var rolos_feitos_por_acao = vias_cortante/vias_rolo;

    
    //calcular numero de ações que o operador vai realizar
    var numero_de_rolos_total = total_etiquetas/quantidade_por_rolo;
    var numero_acoes = numero_de_rolos_total/rolos_feitos_por_acao;

    //Number.isInteger(numero_acoes) == true quer dizer que rolos vão ser todos iguais
    //Number.isInteger(numero_acoes) == false quer dizer que vão existir rolos mais pequenos
    if(numero_acoes == 1){

        document.getElementById("mostrar_resultado").replaceChildren();
        document.getElementById("mostrar_resultado").innerHTML +=
        '<div class="row">'+
            '<table class="table">'+
                '<thead>'+
                    '<tr>'+
                        '<th scope="col">Numero de rolos</th>'+
                        '<th scope="col">Quantidade por rolo</th>'+
                        '<th scope="col">Metros</th>'+
                    '</tr>'+
                '</thead>'+
                '<tbody>'+
                    '<tr>'+
                        '<td>'+numero_de_rolos_total+'</td>'+
                        '<td>'+quantidade_por_rolo+'</td>'+
                        '<td>'+metros_por_rolo+' metros</td>'+
                    '</tr>'+
                '</tbody>'+
            '</table>'+
        '</div>'+
        '<div class="row">'+
            '<a type="submit" class="btn btn-primary btn_codimarc" onclick="clear_div()">Apagar</a>'+
        '</div>';
        console.log("Para produzir "+total_etiquetas+" etiquetas serão produzidos "+numero_de_rolos_total+" rolos com "+quantidade_por_rolo+" etiquetas em metros é "+metros_por_rolo);
    }else if(numero_acoes < 1){
        //exemplo
        //1000 etiquetas total
        //200 por rolo
        //vias 6

        var quantidade_por_rolo_incompleto = total_etiquetas/rolos_feitos_por_acao;

        if((total_etiquetas % rolos_feitos_por_acao) != 0){
            quantidade_por_rolo_incompleto = Math.trunc(total_etiquetas/rolos_feitos_por_acao);
            quantidade_por_rolo_incompleto+=1;
        }

        var metros_por_rolo_incompleto = Math.round((quantidade_por_rolo_incompleto*metros_por_rolo/quantidade_por_rolo),-3);

        document.getElementById("mostrar_resultado").replaceChildren();
        document.getElementById("mostrar_resultado").innerHTML +=
        '<div class="row">'+
            '<table class="table">'+
                '<thead>'+
                    '<tr>'+
                        '<th scope="col">Numero de rolos</th>'+
                        '<th scope="col">Quantidade por rolo</th>'+
                        '<th scope="col">Metros</th>'+
                    '</tr>'+
                '</thead>'+
                '<tbody>'+
                    '<tr>'+
                        '<td>'+rolos_feitos_por_acao+'</td>'+
                        '<td>'+quantidade_por_rolo_incompleto+'</td>'+
                        '<td>'+metros_por_rolo_incompleto+' metros</td>'+
                    '</tr>'+
                '</tbody>'+
            '</table>'+
        '</div>'+
        '<div class="row">'+
            '<a type="submit" class="btn btn-primary btn_codimarc" onclick="clear_div()">Apagar</a>'+
        '</div>';

        console.log("Para produzir "+total_etiquetas+" etiquetas serão produzidos "+rolos_feitos_por_acao+" rolos com "+quantidade_por_rolo_incompleto+" etiquetas em metros é "+metros_por_rolo_incompleto);
    }else if(numero_acoes > 1){
        //exemplo
        //1000 etiquetas total
        //200 por rolo
        //vias 3
            
        //1 - calcular total etiquetas de rolos completos
        var total_acoes_etiquetas_rolos_completos = Math.trunc(total_etiquetas/quantidade_por_rolo/rolos_feitos_por_acao);
        console.log("1-calcular total etiquetas de rolos completos "+total_acoes_etiquetas_rolos_completos);
        //2 - calcular numero de rolos ineiros
        var total_rolos_inteiros = total_acoes_etiquetas_rolos_completos*rolos_feitos_por_acao;
        console.log("2-calcular numero de rolos inteiros "+ total_rolos_inteiros);
        //3 - calcular numeo de etiquetas feitas nos rolos inteiros
        var total_etiquetas_nos_rolos_completos = total_rolos_inteiros*quantidade_por_rolo;
        console.log("3 - calcular numeo de etiquetas feitas nos rolos inteiros "+ total_etiquetas_nos_rolos_completos);
        //4 - calcular etiquetas que faltam para fazer nos rolos incompletos
        var total_etiquetas_nos_rolos_incompletos = total_etiquetas-total_etiquetas_nos_rolos_completos;
        console.log("4 - calcular etiquetas que faltam para fazer nos rolos incompletos "+total_etiquetas_nos_rolos_incompletos);
        //5 - calcular quantas etiquetas leva cada rolo incompleto
        var quantidade_por_rolo_incompleto = total_etiquetas_nos_rolos_incompletos/rolos_feitos_por_acao;
        if(Number.isInteger(quantidade_por_rolo_incompleto) == false){
            quantidade_por_rolo_incompleto =  Math.trunc(quantidade_por_rolo_incompleto)+1;
        }
        console.log("5 - calcular quantas etiquetas leva cada rolo incompleto "+quantidade_por_rolo_incompleto);
        //6- calcular metros dos rolo incompleto
        //var metros_por_rolo_incompleto = Math.round((quantidade_por_rolo_incompleto*metros_por_rolo/quantidade_por_rolo),-3);
        var metros_por_rolo_incompleto = quantidade_por_rolo_incompleto*metros_por_rolo/quantidade_por_rolo;
        metros_por_rolo_incompleto = metros_por_rolo_incompleto.toFixed(3);
        console.log("6- calcular metros dos rolo incompleto "+metros_por_rolo_incompleto);

        document.getElementById("mostrar_resultado").replaceChildren();
        document.getElementById("mostrar_resultado").innerHTML +=
        '<div class="row">'+
            '<table class="table">'+
                '<thead>'+
                    '<tr>'+
                        '<th scope="col">Numero de rolos</th>'+
                        '<th scope="col">Quantidade por rolo</th>'+
                        '<th scope="col">Metros</th>'+
                    '</tr>'+
                '</thead>'+
                '<tbody>'+
                    '<tr>'+
                        '<td>'+total_rolos_inteiros+'</td>'+
                        '<td>'+quantidade_por_rolo+'</td>'+
                        '<td>'+metros_por_rolo+' metros</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td>'+rolos_feitos_por_acao+'</td>'+
                        '<td>'+quantidade_por_rolo_incompleto+'</td>'+
                        '<td>'+metros_por_rolo_incompleto+' metros</td>'+
                    '</tr>'+
                '</tbody>'+
            '</table>'+
        '</div>'+
        '<div class="row">'+
            '<a type="submit" class="btn btn-primary btn_codimarc" onclick="clear_div()">Apagar</a>'+
        '</div>';

        console.log("Para produzir "+total_etiquetas+" vão ser produzidos "+total_rolos_inteiros+" rolos com "+quantidade_por_rolo+
        " mais "+rolos_feitos_por_acao+" rolos com "+quantidade_por_rolo_incompleto+" etiquetas em metros é "+metros_por_rolo_incompleto);
    }
}


function clear_div(){
    document.getElementById("mostrar_resultado").replaceChildren();
    document.getElementById("mostrar_resultado").innerHTML += '';
}
/*

document.getElementById("mostrar_resultado").replaceChildren();
            document.getElementById("content").innerHTML +=
            '<div class="row">'+
                '<table class="table">'+
                    '<thead>'+
                        '<tr>'+
                            '<th scope="col">Numero de rolos</th>'+
                            '<th scope="col">Quantidade por rolo</th>'+
                            '<th scope="col">Metros</th>'+
                        '</tr>'+
                    '</thead>'+
                    '<tbody>'+
                        '<tr>'+
                            '<td>50</td>'+
                            '<td>100</td>'+
                            '<td>500m</td>'+
                        '</tr>'+
                    '</tbody>'+
                '</table>'+
            '</div>'+
            '<div class="row">'+
                '<a type="submit" class="btn btn-primary btn_codimarc" onclick="">Apagar</a>'+
            '</div>';

*/