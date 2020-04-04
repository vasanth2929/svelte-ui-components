<script>
// Import Core Modules 
import {onMount} from 'svelte';
// Import Internal Modules
import {removeAlert} from './utils';

export let type = '';
export let id = '';
export let msg = '';
let timeout = null ;

// implement lifecycle method
onMount(()=>{
    timeout = setTimeout(()=>removeAlert(id),5000);
    return ()=> clearTimeout(timeout);
});

</script>

<p>{msg}</p>