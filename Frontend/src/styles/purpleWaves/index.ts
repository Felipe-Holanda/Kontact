import styled from "styled-components";

export const WaveMainComposer = styled.div`


    position: fixed;
    width: 100%;
    bottom: -4px;
    /* top: 80vh; */
    
    #waves{
        position: fixed;
    width: 100%;
    bottom: -4px;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5));
    }

@keyframes slideUp{
    from{
        transform: translateY(100%);
    }to{
        transform: translateY(0);
    }
}

.waveOne:not(:focus){
    animation: slideUp 1s ease;
}
.waveTwo:not(:focus){
    animation: slideUp 1.5s ease;
}
`