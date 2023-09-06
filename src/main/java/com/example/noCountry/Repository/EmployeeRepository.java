package com.example.noCountry.Repository;

import com.example.noCountry.Entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository <Employee, Long>   {
}
