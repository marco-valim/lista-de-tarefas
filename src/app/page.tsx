import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input} from '@/components/ui/input'
import { Separator } from '@base-ui/react'
import { Plus, List, Check, CircleX  } from 'lucide-react'


const Home = () => {
  return (
    <main className="w-full h-screen bg-gray-400 flex justify-center items-center">
      <Card className='w-lg p-4'>
        <div className='flex gap-2'>
          <Input placeholder='Adicionar tarefa' />
          <Button variant="outline" className="cursor-pointer"><Plus />Cadastrar</Button>
        </div>

        <Separator />

        <div className='flex gap-2'>
          <Badge className="cursor-pointer"><List />Todas</Badge>
          <Badge className="cursor-pointer"><CircleX />Não finalizadas</Badge>
          <Badge className="cursor-pointer"><Check />Concluídas</Badge>
        </div>

      </Card>
    </main>
  )
}

export default Home