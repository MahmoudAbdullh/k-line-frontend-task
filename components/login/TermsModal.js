import { Button, Modal } from "antd";

const TermsModal = ({ visible, handleOk, handleCancel }) => {
  return (
    <>
      <Modal
        title="Terms & Conditions"
        visible={visible}
        // onOk={handleOk}
        // onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Close
          </Button>,
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

TermsModal.defaultProps = {
  visible: false,
  handleOk: () => {},
  handleCancel: () => {},
};
export default TermsModal;
