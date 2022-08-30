import { LightningElement } from 'lwc';

export default class ComboboxBasic extends LightningElement {
    value = 'inProgress';
    montante;
    valEnt;
    resultado;
  
   

    get options() {
        return [
            { label: '3 parcelas', value: 'oppA' },
            { label: '6 parcelas', value: 'oppB' },
            { label: '12 parcelas', value: 'oppC' },
            { label: '24 parcelas', value: 'oppD' },
            { label: '60 parcelas', value: 'oppE' },
            { label: '120 parcelas', value: 'oppF' },
        ];
    }
    
    handleChange(event) {
        this.value = event.detail.value;
        console.log(this.value);

        
    }
    varMontante(event){
      this.montante = event.detail.value;
      console.log('Montante: ' + this.montante);
 }
  
    varValEnt(event){
        this.valEnt = event.detail.value;
      console.log('Valor de entrada: ' + this.valEnt);    
 }
    varCalc(event){
        if(this.value == 'oppA' ){
           this.resultado = '3 x de R$ ' + ((parseFloat(this.montante) + (parseFloat(this.montante) - parseFloat(this.valEnt))/100) / 3).toFixed(2);
        } 
        else if(this.value == 'oppB' ){
           this.resultado = '6 x de R$ ' + (((parseFloat(this.montante) + (parseFloat(this.montante) - parseFloat(this.valEnt)) * 3) / 100) / 6).toFixed(2); 
        }
        else if(this.value == 'oppC' ){
           this.resultado = '12 x de R$ ' + (((parseFloat(this.montante) + (parseFloat(this.montante) - parseFloat(this.valEnt)) * 5) / 100) / 12).toFixed(2); 
        }
        else if(this.value == 'oppD' ){
           this.resultado = '24 x de R$ ' + (((parseFloat(this.montante) + (parseFloat(this.montante) - parseFloat(this.valEnt)) * 6) / 100) / 24).toFixed(2); 
        }
        else if(this.value == 'oppE' ){
           this.resultado = '60 x de R$ ' + (((parseFloat(this.montante) + (parseFloat(this.montante) - parseFloat(this.valEnt)) * 7) / 100) / 60).toFixed(2); 
        }
        else if(this.value == 'oppF' ){
           this.resultado = '120 x de R$ ' + (((parseFloat(this.montante) + (parseFloat(this.montante) - parseFloat(this.valEnt)) * 8) / 100) / 120).toFixed(2); 
        }
        else{
          this.resultado = 'Número de Parcelas Inválido!';
        }
        
        console.log(this.resultado);
        console.log(this.value);
 }
}