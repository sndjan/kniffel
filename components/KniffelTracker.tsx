import React, { useState } from "react"
import { DndContext, closestCenter } from "@dnd-kit/core"
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

interface Player {
  id: string
  name: string
}

const SortableItem = ({ id, name }: { id: string; name: string }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="p-2 border rounded mb-2">
      {name}
    </div>
  )
}

const KniffelTracker = () => {
  const [players, setPlayers] = useState<Player[]>([])
  const [newPlayerName, setNewPlayerName] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingPlayer, setEditingPlayer] = useState<Player | null>(null)

  const handleAddPlayer = () => {
    if (newPlayerName.trim() === "") return
    setPlayers([...players, { id: Date.now().toString(), name: newPlayerName }])
    setNewPlayerName("")
    setIsDialogOpen(false)
  }

  const handleEditPlayer = (player: Player) => {
    setEditingPlayer(player)
    setNewPlayerName(player.name)
    setIsDialogOpen(true)
  }

  const handleUpdatePlayer = () => {
    if (newPlayerName.trim() === "") return
    setPlayers(players.map((player) => (player.id === editingPlayer?.id ? { ...player, name: newPlayerName } : player)))
    setNewPlayerName("")
    setEditingPlayer(null)
    setIsDialogOpen(false)
  }

  const handleDeletePlayer = (id: string) => {
    setPlayers(players.filter((player) => player.id !== id))
  }

  const handleDragEnd = (event: any) => {
    const { active, over } = event
    if (active.id !== over.id) {
      setPlayers((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id)
        const newIndex = items.findIndex((item) => item.id === over.id)
        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Kniffel Tracker</h1>
      <Button onClick={() => setIsDialogOpen(true)}>Add Player</Button>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={players} strategy={verticalListSortingStrategy}>
          {players.map((player) => (
            <SortableItem key={player.id} id={player.id} name={player.name} />
          ))}
        </SortableContext>
      </DndContext>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingPlayer ? "Edit Player" : "Add Player"}</DialogTitle>
          </DialogHeader>
          <Input value={newPlayerName} onChange={(e) => setNewPlayerName(e.target.value)} placeholder="Player Name" />
          <Button onClick={editingPlayer ? handleUpdatePlayer : handleAddPlayer}>
            {editingPlayer ? "Update" : "Add"}
          </Button>
        </DialogContent>
      </Dialog>
      {players.map((player) => (
        <div key={player.id} className="flex items-center justify-between p-2 border rounded mb-2">
          <span>{player.name}</span>
          <div>
            <Button variant="secondary" onClick={() => handleEditPlayer(player)}>
              Edit
            </Button>
            <Button variant="destructive" onClick={() => handleDeletePlayer(player.id)}>
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default KniffelTracker
