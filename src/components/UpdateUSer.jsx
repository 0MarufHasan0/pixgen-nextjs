"use client";

import { authClient } from "@/lib/auth-client";
import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { BiEdit, BiUserMinus } from "react-icons/bi";

export function  UpdateUSerModal() {
    const onSubmit = async (e)=>{
        e.preventDefault()
        const name = e.target.value
        const image= e.target.value

        await authClient.updateUser({
    image: image,
    name: name,
})
        
    }
  return (
    <Modal>
      <Button variant="secondary"><BiEdit/> Update Profile</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <BiUserMinus className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update User</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="image" type="url">
                    <Label>Image Url</Label>
                    <Input placeholder="Enter your Image" />
                  </TextField>

                   <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" slot="close">Save</Button>
            </Modal.Footer>
                 
                </form>
              </Surface>
            </Modal.Body>
           
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}