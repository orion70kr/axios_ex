import axios from 'axios';


export function GetMemberList() {

    axios.get('http://ucom.kr/backend/member.php').then((Response)=>{
        for ( let perf of Response.data.listCustomer){
            document.write(perf.NAME+", "+perf.PHONE+", "+perf.REG_DATE+" <br />");
        }
    }).catch((Error)=>{
        console.log(Error);
    })

}