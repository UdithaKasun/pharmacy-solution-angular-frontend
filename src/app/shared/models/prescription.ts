export class Prescription {
    prescription_id: String;
    prescription_created_user: String;
    prescription_created_timestamp: String;
    prescription_patient_name: String;
    prescription_patient_age : String;
    prescription_patient_gender : String;
    prescription_patient_remark : String;
    prescription_drugs: Array<items> = [];
}

class items {
    prescription_item_drug_name: String;
    prescription_item_frequency: String;
    prescription_item_dosage: String;
    prescription_item_period: String;
    prescription_item_quantity: String;
}