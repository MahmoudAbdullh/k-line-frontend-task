import { Card, Col, Row, Typography } from "antd";
import React from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import Stepper from "../../components/dashboard/NewCase/Stepper";
const newCase = () => {
  return (
    <DashboardLayout>
      <div className="new-case-wrapper">
        <Card>
          <Typography.Title level={3}>Create New Case</Typography.Title>
          <Stepper />
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default newCase;
