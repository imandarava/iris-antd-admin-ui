import React, { useEffect } from 'react';
import { Modal } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { TableListItem } from '../data.d';


export interface UpdateFormProps {
  onCancel: (flag?: boolean) => void;

  updateModalVisible: boolean;
  value:TableListItem;
  updateRef:React.MutableRefObject<FormInstance<any>>
  container:HTMLElement;
}

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const { updateModalVisible, onCancel,updateRef,value,container } = props;
  useEffect(()=>{
    updateRef.current.setFieldsValue({
      ...value
    })
  },[])
 
  return (
    <Modal
  destroyOnClose
  title="编辑权限"
  width={420}
  visible={updateModalVisible}
  onCancel={() => onCancel()}
  footer={null}
  keyboard={false}
  maskClosable={false}
  getContainer={container}
>
  {props.children}
</Modal>
  )

}

export default UpdateForm;
