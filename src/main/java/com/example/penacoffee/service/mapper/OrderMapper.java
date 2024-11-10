package com.example.penacoffee.service.mapper;

import com.example.penacoffee.domain.Customer;
import com.example.penacoffee.domain.Order;
import com.example.penacoffee.service.dto.CustomerDTO;
import com.example.penacoffee.service.dto.OrderDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Order} and its DTO {@link OrderDTO}.
 */
@Mapper(componentModel = "spring")
public interface OrderMapper extends EntityMapper<OrderDTO, Order> {
    @Mapping(target = "customer", source = "customer", qualifiedByName = "customerId")
    OrderDTO toDto(Order s);

    @Named("customerId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    CustomerDTO toDtoCustomerId(Customer customer);
}
