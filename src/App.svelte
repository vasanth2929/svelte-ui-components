<script>
// Import Internal Modules
import Alerts,{createAlert} from './components/alerts';
</script>

<Alerts />
<button on:click="{()=>createAlert({type:"success",msg:"Alert sucess"})}">Success</button>
<button on:click="{()=>createAlert({type:"danger",msg:"Alert danger"})}">Danger Alert</button>
<button on:click="{()=>createAlert({type:"info",msg:"Alert info"})}">Warning Alert</button>