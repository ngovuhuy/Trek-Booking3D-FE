interface ISupplierStaff{
    staffId: number;
    staffName: string;
    staffPhoneNumber: string;
    staffEmail: string;
    staffPassword: string;
    staffAddress: string;
    status: boolean;
    supplierId: number;
    supplier: {
        supplierId: number;
        supplierName: string;
    }
    roleId: number;
    role:{
        roleId: number;
        roleName: string;
        roleDescription: string
    }
}