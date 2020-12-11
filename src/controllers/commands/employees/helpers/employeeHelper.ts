import { Employee } from "../../../typeDefinitions";
import { EmployeeModel } from "../../models/employeeModel";
import { EmployeeClassification } from "../../models/constants/entityTypes";

export const mapEmployeeData = (queriedEmployee: EmployeeModel): Employee => {
	return <Employee>{
		id: queriedEmployee.id,
		active: queriedEmployee.active,
		lastName: queriedEmployee.lastName,
		createdOn: queriedEmployee.createdOn,
		firstName: queriedEmployee.firstName,
		managerId: queriedEmployee.managerId,
		employeeId: queriedEmployee.employeeId.toString(),
		classification: <EmployeeClassification>queriedEmployee.classification
	};
};

export const isElevatedUser = (employeeClassification: EmployeeClassification): boolean => {
	return ((employeeClassification === EmployeeClassification.GeneralManager)
		|| (employeeClassification === EmployeeClassification.ShiftManager));
};
