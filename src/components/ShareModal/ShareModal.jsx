import React from 'react'
import { Modal, useMantineTheme } from "@mantine/core";
import './ShareModal.scss'
import PostShare from '../PostShare/PostShare';
const ShareModal = (props) => {
  const theme = useMantineTheme();
  //! Props
  const { isOpen, setIsOpen } = props;

  //! State

  //! Function

  //! Effect

  //! Render
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={isOpen}
      size="55%"
      onClose={() => setIsOpen(false)}
    >
    <PostShare/>
    </Modal>
  )
}

export default ShareModal