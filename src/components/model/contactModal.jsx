import { Button, Modal } from "flowbite-react";
import { HiOutlineCheckCircle } from "react-icons/hi";

export function ContactModal({openModal,setOpenModal}) {

  return (
    <>
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineCheckCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 text-green-500" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Message Sent Successfully!
            </h3>
            <p className="mt-2 text-center">Your message has been sent. We will get back to you soon.</p>
            <div className="flex justify-center gap-4">
              <Button color="success" onClick={() => setOpenModal(false)}>
                {"OK"}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
