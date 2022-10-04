import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Stack, Text } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  const premios = [
    {
      nombreTerna: "Mejor streamer de LOL",
      nominados: [
        {nombre: "josedeodo"},
        {nombre: "grafo"},
        {nombre: "shelao"},
        {nombre: "tellier"},
      ],
      ganadores: ["grafo", "shelao"]
    },
    {
      nombreTerna: "Mejor streamer de fortnite",
      nominados: [
        {nombre: "zeko"},
        {nombre: "king"},
        {nombre: "escaracho"},
        {nombre: "santidead"},
      ],
      ganadores: ["king", "zeko"]
    }
  ]

  return (
    <Stack>
      <Accordion allowMultiple>
        {premios.map((item: any) =>         
        <AccordionItem key={item.nombreTerna}>
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                {item.nombreTerna}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <ul>{item.nominados.map((item: any) => <li key={item.nombre}>{item.nombre}</li>)}</ul>
            <Accordion allowMultiple>
              {item.ganadores.map((ganador: any, index: number) =>         
              <AccordionItem key={index}>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      {`Ganador ${index + 1}`}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>{ganador}</Text>
                </AccordionPanel>
              </AccordionItem>)}
            </Accordion>
          </AccordionPanel>
        </AccordionItem>)}
      </Accordion>
    </Stack>
  )
}

export default App
